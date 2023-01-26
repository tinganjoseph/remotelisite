import React from 'react';
import {contact, logo, menu} from '../assets';



const Contact = () => {
    return (
        <section id="contact" className="p-6 dark:bg-white dark:text-white rounded-lg clients">
        <div className="container grid gap-12 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-teal-700">
                <span className="block mb-2 text-5xl dark:text-white font-extrabold">Remoteli</span>
                <h1 className="text-2xl font-extrabold dark:text-gray-50">GET IN TOUCH NOW</h1>
                <p className="my-8">
                    <span className="font-medium dark:text-gray-50">Helping you build an on-demand remote workforce.</span>
                </p>
                <form novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm sr-only">Your name</label>
                        <input id="name" type="text" placeholder="Your name" className="w-full h-12  p-3 rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
                    </div>
                    <div>
                        <label for="lastname" className="text-sm sr-only">Email address</label>
                        <input id="lastname" type="text" placeholder="Email address" className="w-full h-12  p-3 rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
                    </div>
                    <button type="button" className="w-full py-2 h-12 font-semibold rounded dark:bg-yellow-900 dark:text-white">Send</button>
                </form>
            </div>
            <img src={contact} alt="" className="object-cover w-full h-full rounded-lg xl:col-span-3 dark:bg-gray-500" />
        </div>
    </section>
    );
};





export default Contact;
