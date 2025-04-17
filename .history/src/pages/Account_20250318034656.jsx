import React from 'react';

const Account = () => {
    return (
        <div>
            <section class="bg-white py-8 antialiased md:py-8">
                <div class="mx-auto max-w-screen-lg px-4 2xl:px-0">
                    <h2 class="mb-4 text-xl font-semibold text-gray-900  sm:text-2xl md:mb-6">General overview</h2>
                    <div class="py-4 md:py-8">
                        <div class="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                            <div class="space-y-4">
                                <div class="flex space-x-4">
                                    <img class="h-16 w-16 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png" alt="Helene avatar" />
                                    <div>
                                        <span class="mb-2 inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800"> PRO Account </span>
                                        <h2 class="flex items-center text-xl font-bold leading-none text-gray-900  sm:text-2xl">Helene Engels</h2>
                                    </div>
                                </div>
                                <dl class="">
                                    <dt class="font-semibold text-gray-900 ">Email Address</dt>
                                    <dd class="text-gray-500 ">helene@example.com</dd>
                                </dl>
                                <dl>
                                    <dt class="font-semibold text-gray-900 ">Home Address</dt>
                                    <dd class="flex items-center gap-1 text-gray-500 ">
                                        <svg class="hidden h-5 w-5 shrink-0 text-gray-400  lg:inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                                        </svg>
                                        2 Miles Drive, NJ 071, New York, United States of America
                                    </dd>
                                </dl>
                            </div>
                            <div class="space-y-4">
                                <dl>
                                    <dt class="font-semibold text-gray-900 ">Phone Number</dt>
                                    <dd class="text-gray-500 ">+1234 567 890 / +12 345 678</dd>
                                </dl>
                                
                                <dl>
                                    <dt class="font-semibold text-gray-900 ">My Companies</dt>
                                    <dd class="text-gray-500 ">FLOWBITE LLC, Fiscal code: 18673557</dd>
                                </dl>
                                <dl>
                                    <dt class="mb-1 font-semibold text-gray-900 ">Payment Methods</dt>
                                    <dd class="flex items-center space-x-4 text-gray-500 ">
                                        <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 ">
                                            <img class="h-4 w-auto " src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg" alt="" />
                                            <img class="hidden h-4 w-auto " src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg" alt="" />
                                        </div>
                                        <div>
                                            <div class="text-sm">
                                                <p class="mb-0.5 font-medium text-gray-900 ">Visa ending in 7658</p>
                                                <p class="font-normal text-gray-500 ">Expiry 10/2024</p>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                        <button type="button" data-modal-target="accountInformationModal2" data-modal-toggle="accountInformationModal2" class="bg-[red] inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  sm:w-auto">
                            <svg class="-ms-0.5 me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"></path>
                            </svg>
                            Logout
                        </button>
                    </div>
                    <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 ">
                        <h3 class="mb-4 text-xl font-semibold text-gray-900 ">Latest orders</h3>
                        <div class="flex flex-wrap items-center gap-y-4 border-b border-gray-200 pb-4 ">
                            <dl class="w-1/2 sm:w-48">
                                <dt class="text-base font-medium text-gray-500 ">Order ID:</dt>
                                <dd class="mt-1.5 text-base font-semibold text-gray-900 ">
                                    <a href="#" class="hover:underline">#FWB12546798</a>
                                </dd>
                            </dl>

                            <dl class="w-1/2 sm:w-1/4 md:flex-1 lg:w-auto">
                                <dt class="text-base font-medium text-gray-500 ">Date:</dt>
                                <dd class="mt-1.5 text-base font-semibold text-gray-900 ">11.12.2023</dd>
                            </dl>

                            <dl class="w-1/2 sm:w-1/5 md:flex-1 lg:w-auto">
                                <dt class="text-base font-medium text-gray-500 ">Price:</dt>
                                <dd class="mt-1.5 text-base font-semibold text-gray-900 ">$499</dd>
                            </dl>

                            <dl class="w-1/2 sm:w-1/4 sm:flex-1 lg:w-auto">
                                <dt class="text-base font-medium text-gray-500 ">Status:</dt>
                                <dd class="me-2 mt-1.5 inline-flex shrink-0 items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 ">
                                    <svg class="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                                    </svg>
                                    In transit
                                </dd>
                            </dl>

                            <div class="w-full sm:flex sm:w-32 sm:items-center sm:justify-end sm:gap-4">
                                <button
                                
                                    type="button"
                                    class="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 "
                                >
                                    View order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Account;