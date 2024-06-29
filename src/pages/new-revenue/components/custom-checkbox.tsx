export default function CustomCheckbox({
  title,
  id,
  defaultChecked,
}: {
  title: string;
  id: string;
  defaultChecked?: boolean;
}) {
  return (
    <>
      <div className="flex items-center">
        <input
          defaultChecked={defaultChecked}
          id={id}
          type="checkbox"
          className="size-4 appearance-none border-[3px] font-bold rounded-md border-primary bg-white checked:bg-primary focus:outline-none relative"
        />
        <label htmlFor={id} className="ml-2 text-xs sm:text-sm font-normal text-gray-700">
          {title}
        </label>
        <style>{`
          input[type="checkbox"]:checked::before {
            content: "\\2714"; /* Unicode for check mark */
            display: block;
            color: white;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            text-align: center;
            line-height: 0.8rem; 
            font-size: 0.8rem;
          }
        `}</style>
      </div>
    </>
  );
}
