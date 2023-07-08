import { DatePicker, Input, TimePicker } from "antd";
import type { DatePickerProps } from "antd";
import type { Dayjs } from "dayjs";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export default function Reservation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const onChangeTime  = (time: Dayjs) => {
    console.log(time);
  };

  const format = "HH:mm";

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <section className="bg-[#f1f5dd">
        <div className="mx-auto max-w-7xl md:px-8 !pt-28">
          <div>
            <h1 className="text-4xl font-bold text-black text-center mb-3">
              Reservation
            </h1>
            <form
              onSubmit={onSubmit}
              className="bg-white shadow-md px-8 pt-6 pb-8 mb-4 rounded-3xl"
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <Input
                    {...register("first_name", { required: true })}
                    size="large"
                  />
                  {errors.first_name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Last Name
                  </label>
                  <Input
                    {...register("last_name", { required: true })}
                    size="large"
                  />
                  {errors.last_name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Phone Number
                  </label>
                  <Input
                    {...register("phone_number", { required: true })}
                    size="large"
                  />
                  {errors.phone_number && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Number of People
                  </label>
                  <Input
                    size="large"
                    className="w-full"
                    {...register("numbert_people", { required: true })}
                  />
                  {errors.numbert_people && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Date
                  </label>
                  <DatePicker
                    {...register("date", { required: true })}
                    onChange={onChange}
                    size="large"
                    className="w-full"
                  />
                  {errors.date && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Time
                  </label>
                  <TimePicker
                    {...register("time", { required: true })}
                    defaultValue={dayjs("17:00", format)}
                    format={format}
                    minuteStep={15}
                    className="w-full"
                    size="large"
                    onChange={() => onChangeTime}
                  />
                  {errors.time && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Book Table
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
