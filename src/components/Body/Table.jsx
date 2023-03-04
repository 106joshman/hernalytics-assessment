import React from "react";
import Tinubu from "../../assets/Tinubu.png";
import Peter from "../../assets/Peter.png";
import Kwankwaso from "../../assets/Kwankwaso.png";
import Dumebi from "../../assets/Dumebi.png";
import Umeadi from "../../assets/Umeadi.png";
import Yusuf from "../../assets/Yusuf.png";
import Christopher from "../../assets/Christopher.png";
import Hamza from "../../assets/Hamza.png";
import Sowore from "../../assets/Sowore.png";
import Princess from "../../assets/Princess.png";
import Atiku from "../../assets/Atiku.png";

const Table = () => {
  return (
    <div class="tableList flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center text-sm font-light">
              <thead class="border-b bg-[#111421] font-medium text-white dark:border-neutral-500 dark:bg-neutral-900 justify-start text-start">
                <tr>
                  <th scope="col" class=" text-start px-6 py-4">
                    Candidate
                  </th>
                  <th scope="col" class="text-start px-6 py-4">
                    Party
                  </th>
                  <th scope="col" class="text-start px-6 py-4">
                    Gender
                  </th>
                  <th scope="col" class=" px-6 py-4">
                    Running Mate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img
                      src={Tinubu}
                      className="rounded-full items-center mr-2"
                      alt=""
                      srcset=""
                    />{" "}
                    Tinubu Bola Ahmed
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">APC</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Shettima Kashim</td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img
                      src={Atiku}
                      className="rounded-full items-center mr-2"
                      alt=""
                      srcset=""
                    />{" "}
                    Abubakar Atiku
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">PDP</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Okowa Arthur Ifeanyi
                  </td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img
                      src={Peter}
                      className="rounded-full items-center mr-2"
                      alt=""
                      srcset=""
                    />{" "}
                    Obi Peter Gregory
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">LP</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Baba Ahmed Yusuf Datti
                  </td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img
                      src={Kwankwaso}
                      className="rounded-full items-center mr-2"
                      alt=""
                      srcset=""
                    />
                    Musa Mohammed Rabiu Kwankwaso
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">NNPP</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Shettima Kashim</td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img
                      src={Dumebi}
                      className="rounded-full items-center mr-2"
                      alt=""
                      srcset=""
                    />
                    Kachikwu Dumebi
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">ADC</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Shettima Kashim</td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img
                      src={Umeadi}
                      className="rounded-full items-center mr-2"
                      alt=""
                      srcset=""
                    />
                    Umeadi Peter Nwanchukwu
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">APGA</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Shettima Kashim</td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img
                      src={Yusuf}
                      className="rounded-full items-center mr-2"
                      alt=""
                      srcset=""
                    />
                    Sani Yabagi Yusuf
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">ADP</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Shettima Kashim</td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img
                      src={Christopher}
                      className="rounded-full items-center mr-2"
                      alt=""
                      srcset=""
                    />
                    Imumolen Irene Christopher
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">A</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Shettima Kashim</td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img
                      src={Hamza}
                      className="rounded-full items-center mr-2"
                      alt=""
                      srcset=""
                    />
                    Almustapha Hamza
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">AA</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Shettima Kashim</td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img
                      src={Sowore}
                      className="rounded-full items-center mr-2"
                      alt=""
                      srcset=""
                    />
                    Sowore Omoyele Stephen
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">APM</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Shettima Kashim</td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img
                      src={Princess}
                      className="rounded-full items-center mr-2"
                      alt=""
                      srcset=""
                    />
                    Ojei Princess Chichi
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">APP</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Female</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Shettima Kashim</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
