import { FC } from "react";

const ContactModalContent: FC = () => {
  const numereTelefon = ['0744 321 295', '0753 069 711'];

  return (
    <div className="flex flex-row gap-4 justify-around">
      <div className="flex flex-col gap-2">
        <span>Strada Fundatura Harmanului Nr.2, Brasov, Romania</span>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.057151903491!2d25.640703376153763!3d45.66975297107805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35c053a4df539%3A0x5d022caa06f8e0d6!2sPaps%20S.R.L.!5e0!3m2!1sen!2sro!4v1713264182894!5m2!1sen!2sro"
          width="500"
          height="400"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1">
            <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
            </svg>
            <span>Telefon</span>
          </div>
          <div className="flex flex-col gap-1">
            {numereTelefon.map((nr, index) => (
              <span key={index}>
                {nr}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-1">
            <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
              <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
            </svg>
            <span>Email</span>
          </div>
          <span>papsbv1@yahoo.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactModalContent;
