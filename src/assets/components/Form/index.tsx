import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import TextInput from "../inputComponents/TextInput";
import RadioButtons from "../inputComponents/RadioButtons";
import SubmitButton from "../inputComponents/SubmitButton";
import styles from "./index.module.css";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  terms?: boolean;
  queryType: string;
};

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
    terms: yup.boolean(),
    queryType: yup.string().required(),
  })
  .required();

const radioButtonsConfig = [
  {
    value: "generalEnquiry",
    label: "General Enquiry",
  },
  {
    value: "queryTypeSupport",
    label: "Support Request",
  },
];

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const notify = (name: string) => {
    toast.success(`${name}, you have registered`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    notify(data.firstName);
    reset();
  };

  return (
    <div
      className={`bg-white border-box p-4 max-w-xl m-auto mt-20 ${styles.borderRadius}`}>
      <h5>Contact Us</h5>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <TextInput
            label="First Name"
            placeholder="First Name"
            name="firstName"
            register={register}
            error={errors.firstName?.message || ""}
          />
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            name="lastName"
            register={register}
            error={errors.lastName?.message || ""}
          />
        </div>
        <TextInput
          label="Email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email?.message || ""}
        />
        <RadioButtons
          config={radioButtonsConfig}
          register={register}
          error={errors.queryType?.message || ""}
          name="queryType"
        />
        <div className={`relative p-2 pb-4 flex flex-col`}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            defaultValue=""
            {...register("message")}
            className={`w-full border rounded p-2 ${styles.textareaStyle}`}
          />
          {errors.message?.message && (
            <div className="text-xs text-red-600">{errors.message.message}</div>
          )}
        </div>
        <label htmlFor="terms" className="flex items-center">
          <input
            {...register("terms")}
            type="checkbox"
            id="terms"
            className="mr-2"
          />
          I agree to the terms and conditions
        </label>
        <SubmitButton label="Submit" />{" "}
      </form>
    </div>
  );
}
