import { contactInfo } from "@/constants/contactInfo";

export const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <p className="font-medium text-blue-500 dark:text-blue-400">
            Contact us
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            We’d love to hear from you
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Chat to our friendly team.
          </p>
        </div>

        <img
          className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96"
          src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100"
          alt=""
        />

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800"
            >
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                <img src={info.icon} alt="svg" />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                {info.type}
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {info.description}
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                {info.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
