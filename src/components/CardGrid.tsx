import Image from "next/image";
import SearchBar from "./SearchBar";

const cards = [
    { name: '2022 Japanese Promos Pikachu #1 PSA 10', price: '$49.99' },
    { name: '2023 Black Star Promos Pikachu with Grey Felt Hat #85 CGC 10', price: '$49.99' },
    { name: '2022 Japanese Promos Pikachu #1 PSA 10', price: '$49.99' },
    { name: '2023 Black Star Promos Pikachu with Grey Felt Hat #85 CGC 10', price: '$49.99' },
    { name: '2022 Japanese Promos Pikachu #1 PSA 10', price: '$49.99' },
    { name: '2023 Black Star Promos Pikachu with Grey Felt Hat #85 CGC 10', price: '$49.99' },
    { name: '2022 Japanese Promos Pikachu #1 PSA 10', price: '$49.99' },
];

export default function CardGrid() {
    return (
        <>
            <SearchBar />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {cards.map((item, index) => (
                    <div key={index} className="w-full border-[2px] border-[#302E2E] rounded-[13px] flex flex-col justify-between items-center">
                        <Image src={'https://s3-alpha-sig.figma.com/img/cb16/d64e/100f689adbc8d8e1c6750fba4dea369b?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GptCQ1aklyWhiIij89~rFPYEdAzOFl01tZSUNacvHPA3EQTEJbmkayShuqvpKDeuK9SS9MDLmP~LvcbWa-GLJmAvLvD~MAzI6GoENL-fjHEQTsrPasYDMbCR5IAr8ekTFjx4QJuFMSyj246yTKKQim2atC2cI4~GqctJV2vvp2h5QB8LW~nGsSmxjjrWP28sxb~5seqdFXvYkwdXSiWC4VrCPxWtkdcayhD6JeKbOBAubXUfwYi6uiwQibnM39kLvSCrNLpKeKIMzyLxNVdNl5ToXtAE6VqFdj36Ow5yCvZ2HTv4jtM323jOcc0pAxNKohGiWTGwBSOsi89Udsc5gA__'}
                            width={0}
                            height={0}
                            alt=""
                            sizes="100vw"
                            className="bg-black rounded-[13px] w-full"
                        />
                        <div className="px-[16px] py-[4px]">
                            <p>{item.name}</p>
                        </div>
                        <p className="text-[#F5A600] text-[18px] text-center my-2">{item.price}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
