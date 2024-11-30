import React, { useState } from 'react';
import { Input } from "@/components/ui/input";

const MediaSection = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = async () => {
        try {
            alert("Subscription email sent successfully!");
        } catch (error) {
            alert("Failed to send subscription email.");
            console.error(error);
        }
    };

    return (
        <div>
            <section id="media" className="text-center bg-white pt-10">
                <div className="text-center">
                    <img src="Finira Logo.png" alt="finira logo" width="150px" height="50px" className="mx-auto pt-32"/>
                    <h1 className="text-black text-xl font-bold mt-2">Subscribe to our Newsletter</h1>
                    <p className="text-black mt-4">Get New Updates of our Company by Subscribing to our Newsletter</p>
                    {/* <div className="flex flex-col sm:flex-row justify-center items-center w-96 mt-10 ms-3 space-y-4 sm:space-y-0 sm:space-x-2"> */}
                    <div className="flex flex-col sm:flex-col justify-center items-center w-full max-w-md mx-auto mt-10 ps-3 space-x-2 sm:space-x-2">
                        <Input type="email" placeholder="Email" className="hover:border-purple-500 w-full mb-5 text-black" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <button type="submit" className="border-2 bg-purple-500 text-white px-8 py-1 rounded hover:bg-purple-700 w-40 mb-20 md:mb-20 sm:mb-20" onClick={handleSubscribe} >Subscribe</button>
                    {/* </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MediaSection;
