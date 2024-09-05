"use client"

import Image from "next/image";

export default function UserProfile() {
    return (
        <div className="relative flex flex-col p-4 w-full md:px-12 -mt-16 md:-mt-32 z-10">
            <div className="flex justify-between items-center">
            <Image src={"https://s3-alpha-sig.figma.com/img/362f/aee1/b30b14dca7e1a3c8ee71c72207545784?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kjaus88Fs3-rInmq6A2Ifk2J~elCon62cx1EuggLR-JAZRIYccbYLX~I2UyNfrAPBiWzjO291JNuxRGGKoIt0JWUtt58CRXGrsTumSqjAE-K9~mS0xL~u1q5YYnElcAhJiGOaAOqeW~SDbWEeOsTyuww8~OWh0reuRyboOx6VybkaoRhPvTABfqma0T7n-Vj5xUXxFR4rSKbDsWCnI9ry00SdxFN1GaDKgA~16bKsOqOAktDxBlzCZQJ5jU5N~lq597UTpOJmiv0YHF0FMAW4U2UbAq3c4AQwVF989niVNYTYs5OQwENRiMkdqJqzxrtXIJntovf7QKnMNz-nTEheg__"}
              width={0}
              height={0}
              alt=""
              sizes="100vw"
              className="rounded-full w-[100px] md:w-[200px]"
            />
            <div className="flex space-x-4 mt-12 md:mt-20">
                    <GlobeIcon className="w-4 h-4 md:w-6 md:h-6" />
                    <XIcon className="w-4 h-4 md:w-6 md:h-6" />
                    <TiktokIcon className="w-4 h-4 md:w-6 md:h-6" />
                </div>
            </div>
            <div className="text-left">
                <h1 className="text-[20px] md:text-[26px] mt-2 md:mt-4 font-bold">Jane Doe</h1>
                <p className="text-[16px] md:text-[22px] mt-2 md:mt-4">One Piece & Pokemon TCG Collector!!</p>
            </div>
        </div>
    );
}

function GlobeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    )
}

function TiktokIcon(props: any) {
    return (
        <svg  {...props} width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9026 3.76C15.9912 2.7195 15.4889 1.38324 15.4893 0H11.3693V16.5333C11.3375 17.428 10.9598 18.2755 10.3157 18.8973C9.67153 19.519 8.81124 19.8665 7.91598 19.8667C6.02265 19.8667 4.44931 18.32 4.44931 16.4C4.44931 14.1067 6.66265 12.3867 8.94265 13.0933V8.88C4.34265 8.26667 0.315979 11.84 0.315979 16.4C0.315979 20.84 3.99598 24 7.90265 24C12.0893 24 15.4893 20.6 15.4893 16.4V8.01333C17.16 9.21313 19.1658 9.85686 21.2226 9.85333V5.73333C21.2226 5.73333 18.716 5.85333 16.9026 3.76Z" fill="white" />
        </svg>


    )
}

function XIcon(props: any) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8754 10.1623L22.5549 0H20.4977L12.9634 8.82343L6.94286 0H0L9.10286 13.344L0 24H2.05714L10.0149 14.6811L16.3731 24H23.316L13.8754 10.1623ZM11.0589 13.4606L10.1366 12.132L2.79771 1.56H5.95714L11.8783 10.092L12.8006 11.4206L20.4994 22.512H17.34L11.0589 13.4606Z" fill="white" />
        </svg>

    )
}
