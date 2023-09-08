import React from "react";

const Articles = () => {
  return (
    <>
      <div class="container px-6 py-16 mx-auto text-center">
        <div class="max-w-lg mx-auto">
          <h1 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Blogs
          </h1>
          <p class="mt-6 text-gray-500 dark:text-gray-300 text-justify">
          Blogging is a canvas for your thoughts, a space to connect with others, and a journey of self-expression. In just a few words, it's about sharing your unique voice with the world, fostering connections, and leaving a lasting impact through the power of written words. Whether you're a seasoned blogger or new to the scene, blogging offers a platform for creativity and community, where every post is a step on your path to influence and insight. So, start your blog today and let your voice shine in the digital world.
          </p>
        </div>
      </div>
      <hr className="flex justify-center mb-10 border-t-2 border-gray-300 " />
      <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-10">
        <img
          class="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <div class="p-6">
          <div>
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Product
            </span>
            <a
              href="/"
              class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
            >
              My Journey
            </a>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Studying abroad was a life-changing journey. From new friendships to cultural immersion, it transformed me in ways I never expected. Grateful for the memories and growth, I carry my study abroad experience with me wherever I go.
            </p>
          </div>

          <div class="mt-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <img
                  class="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <a
                  href="/"
                  class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                >
                  Jone Doe
                </a>
              </div>
              <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
                5 SEP 2023
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-10">
        <img
          class="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <div class="p-6">
          <div>
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Tour
            </span>
            <a
              href="/"
              class="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline"
            >
             Embrace the Adventure
            </a>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Life is an incredible adventure waiting to be explored. From hidden treasures in distant lands to the thrill of the unknown, adventure beckons us to step out of our comfort zones and experience the extraordinary.
            </p>
          </div>

          <div class="mt-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <img
                  class="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <a
                  href="/"
                  class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                >
                 John 
                </a>
              </div>
              <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
                6 SEP 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
