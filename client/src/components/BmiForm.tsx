import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import {
  Calculator,
  User,
  Calendar,
  Ruler,
  Weight,
  ArrowRight,
} from "lucide-react";
import { calculateBMI, getBMICategory } from "../utils/bmiUtils";
import { API_BASE_URL } from '../config/api';

// Form validation schema
const bmiFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  age: z
    .number()
    .min(13, "Age must be at least 13 years")
    .max(120, "Age must be less than 120 years"),
  heightCm: z
    .number()
    .min(120, "Height must be at least 120 cm")
    .max(250, "Height must be less than 250 cm"),
  weightKg: z
    .number()
    .min(25, "Weight must be at least 25 kg")
    .max(300, "Weight must be less than 300 kg"),
});

type BmiFormData = z.infer<typeof bmiFormSchema>;

interface BmiFormProps {}

const BmiForm: React.FC<BmiFormProps> = () => {
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setValue,
  } = useForm<BmiFormData>({
    resolver: zodResolver(bmiFormSchema),
    mode: "onChange",
  });

  // Watch form values for real-time BMI calculation
  const watchedValues = watch(["heightCm", "weightKg"]);

  // Calculate BMI in real-time
  useEffect(() => {
    const [height, weight] = watchedValues;
    if (height && weight && height > 0 && weight > 0) {
      const calculatedBMI = calculateBMI(height, weight);
      setBmi(calculatedBMI);
      setCategory(getBMICategory(calculatedBMI));
    } else {
      setBmi(null);
      setCategory(null);
    }
  }, [watchedValues]);

  const onSubmit = async (data: BmiFormData) => {
    setIsSubmitting(true);
    try {
      const calculatedBMI = calculateBMI(data.heightCm, data.weightKg);
      const bmiCategory = getBMICategory(calculatedBMI);
      
      const formData = {
        ...data,
        bmi: calculatedBMI,
        category: bmiCategory,
      };
      
      console.log('Submitting data:', formData); // Add this line
      
      const response = await fetch(`${API_BASE_URL}/api/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      console.log('Response status:', response.status); // Add this line
      
      if (response.ok) {
        const result = await response.json();
        navigate(`/results/${result.id}`);
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText); // Add this line
        throw new Error("Failed to submit profile");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>, field: keyof BmiFormData) => {
    const value = parseFloat(e.target.value)
    if (!isNaN(value)) {
      setValue(field, value, { shouldValidate: true, shouldDirty: true })
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="form-label">
            <User className="w-4 h-4 inline mr-2" />
            Full Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={`input-field ${errors.name ? "border-red-500 focus:ring-red-500" : ""}`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Age Input */}
        <div>
          <label htmlFor="age" className="form-label">
            <Calendar className="w-4 h-4 inline mr-2" />
            Age (years)
          </label>
          <input
            id="age"
            type="number"
            {...register("age", { valueAsNumber: true })}
            // Remove this line: onChange={(e) => handleNumberInput(e, 'age')}
            className={`input-field ${errors.age ? "border-red-500 focus:ring-red-500" : ""}`}
            placeholder="Enter your age"
            min="13"
            max="120"
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.age.message}
            </p>
          )}
        </div>

        {/* Height Input */}
        <div>
          <label htmlFor="heightCm" className="form-label">
            <Ruler className="w-4 h-4 inline mr-2" />
            Height (cm)
          </label>
          <input
            id="heightCm"
            type="number"
            {...register("heightCm", { valueAsNumber: true })}
            // Remove this line: onChange={(e) => handleNumberInput(e, 'heightCm')}
            className={`input-field ${errors.heightCm ? "border-red-500 focus:ring-red-500" : ""}`}
            placeholder="Enter your height in centimeters"
            min="120"
            max="250"
          />
          {errors.heightCm && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.heightCm.message}
            </p>
          )}
        </div>

        {/* Weight Input */}
        <div>
          <label htmlFor="weightKg" className="form-label">
            <Weight className="w-4 h-4 inline mr-2" />
            Weight (kg)
          </label>
          <input
            id="weightKg"
            type="number"
            step="0.1"
            {...register("weightKg", { valueAsNumber: true })}
            // Remove this line: onChange={(e) => handleNumberInput(e, 'weightKg')}
            className={`input-field ${errors.weightKg ? "border-red-500 focus:ring-red-500" : ""}`}
            placeholder="Enter your weight in kilograms"
            min="25"
            max="300"
          />
          {errors.weightKg && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.weightKg.message}
            </p>
          )}
        </div>

        {/* Real-time BMI Display */}
        {bmi && category && (
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-6 rounded-2xl border border-primary-200 dark:border-primary-700">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Calculator className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2" />
                <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100">
                  Your BMI Result
                </h3>
              </div>
              <div className="text-3xl font-bold text-primary-700 dark:text-primary-300 mb-2">
                {bmi.toFixed(1)}
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-200">
                {category}
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className={`w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <span>Get My Personalized Plan</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Disclaimer */}
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          <p>
            <strong>Note:</strong> This BMI calculation is for screening
            purposes only and does not account for body composition. Always
            consult healthcare professionals for personalized medical advice.
          </p>
        </div>
      </form>
    </div>
  );
};

export default BmiForm;
