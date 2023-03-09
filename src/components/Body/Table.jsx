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
import APC from "../../assets/party-logo/APC.png";
import PDP from "../../assets/party-logo/PDP.png";
import LP from "../../assets/party-logo/LP.png";
import NNPP from "../../assets/party-logo/NNPP.png";
import ADC from "../../assets/party-logo/ADC.png";
import APGA from "../../assets/party-logo/APGA.png";
import ADP from "../../assets/party-logo/ADP.png";
import AA from "../../assets/party-logo/AA.png";
import APM from "../../assets/party-logo/APM.png";
import APP from "../../assets/party-logo/APP.png";

const Table = () => {
  return (
    <div class="tableList flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden px-4">
            <table class="min-w-full text-center text-sm font-light">
              <thead class="border-b bg-[#111421] font-medium text-white dark:border-neutral-500 dark:bg-neutral-900 justify-start text-start">
                <tr>
                  <th scope="col" class=" text-start px-6 py-4">
                    Candidate
                  </th>
                  <th scope="col" class="text-start px-6 py-4">
                    Party
                  </th>
                  <th scope="col" class=" px-6 py-4">
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
                    <img loading="lazy"
                      src={Tinubu}
                      className="rounded-full items-center mr-2"
                      alt="presidential aspirant thumb-image"
                      srcset=""
                    />{" "}
                    Tinubu Bola Ahmed
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">
                    <span className="flex items-center" >  <img loading="lazy"
                      src={APC}
                      alt="party logo"
                      srcset=""
                      className="mr-2 items-center"
                    />{" "}
                   APC</span>
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Shettima Kashim
                  </td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img loading="lazy"
                      src={Atiku}
                      className="rounded-full items-center mr-2"
                      alt="presidential aspirant thumb-image"
                      srcset=""
                    />
                    Abubakar Atiku
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">
                    <span className="flex items-center" ><img loading="lazy"
                      src={PDP}
                      alt="party logo"
                      srcset=""
                      className="mr-2 items-center"
                    />{" "}
                     PDP</span>
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Okowa Arthur Ifeanyi
                  </td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img loading="lazy"
                      src={Peter}
                      className="rounded-full items-center mr-2"
                      alt="presidential aspirant thumb-image"
                      srcset=""
                    />{" "}
                    Obi Peter Gregory
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">
                    <span className="flex items-center" ><img loading="lazy"
                      src={LP}
                      alt="party logo"
                      srcset=""
                      className="mr-2 items-center"
                    />{" "}
                     LP</span>
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Baba Ahmed Yusuf Datti
                  </td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img loading="lazy"
                      src={Kwankwaso}
                      className="rounded-full items-center mr-2"
                      alt="presidential aspirant thumb-image"
                      srcset=""
                    />
                    Musa Mohammed Rabiu Kwankwaso
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">
                    <span className="flex items-center" >  <img loading="lazy"
                      src={NNPP}
                      alt="party logo"
                      srcset=""
                      className="mr-2 items-center"
                    />{" "}
                   NNPP</span>
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Shettima Kashim
                  </td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img loading="lazy"
                      src={Dumebi}
                      className="rounded-full items-center mr-2"
                      alt="presidential aspirant thumb-image"
                      srcset=""
                    />
                    Kachikwu Dumebi
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">
                    <span className="flex items-center" >  <img loading="lazy"
                      src={ADC}
                      alt="party logo"
                      srcset=""
                      className="mr-2 items-center"
                    />{" "}
                   ADC</span>
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Shettima Kashim
                  </td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img loading="lazy"
                      src={Umeadi}
                      className="rounded-full items-center mr-2"
                      alt="presidential aspirant thumb-image"
                      srcset=""
                    />
                    Umeadi Peter Nwanchukwu
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">
                    <span className="flex items-center" >  <img loading="lazy"
                      src={APGA}
                      alt="party logo"
                      srcset=""
                      className="mr-2 items-center"
                    />{" "}
                   APGA</span>
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Shettima Kashim
                  </td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img loading="lazy"
                      src={Yusuf}
                      className="rounded-full items-center mr-2"
                      alt="presidential aspirant thumb-image"
                      srcset=""
                    />
                    Sani Yabagi Yusuf
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">
                    <span className="flex items-center" >  <img loading="lazy"
                      src={ADP}
                      alt="party logo"
                      srcset=""
                      className="mr-2 items-center"
                    />{" "}
                   ADP</span>
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Shettima Kashim
                  </td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img loading="lazy"
                      src={Christopher}
                      className="rounded-full items-center mr-2"
                      alt="presidential aspirant thumb-image"
                      srcset=""
                    />
                    Imumolen Irene Christopher
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">
                    <span className="flex items-center" >  <img loading="lazy"
                      src={APC}
                      alt="party logo"
                      srcset=""
                      className="mr-2 items-center"
                    />{" "}
                   A</span>
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Shettima Kashim
                  </td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img loading="lazy"
                      src={Hamza}
                      className="rounded-full items-center mr-2"
                      alt="presidential aspirant thumb-image"
                      srcset=""
                    />
                    Almustapha Hamza
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">
                    <span className="flex items-center" >  <img loading="lazy"
                      src={AA}
                      alt="party logo"
                      srcset=""
                      className="mr-2 items-center"
                    />{" "}
                   AA</span>
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Shettima Kashim
                  </td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img loading="lazy"
                      src={Sowore}
                      className="rounded-full items-center mr-2"
                      alt="presidential aspirant thumb-image"
                      srcset=""
                    />
                    Sowore Omoyele Stephen
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">
                    <span className="flex items-center" >  <img loading="lazy"
                      src={APM}
                      alt="party logo"
                      srcset=""
                      className="mr-2 items-center"
                    />{" "}
                   APM</span>
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">Male</td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Shettima Kashim
                  </td>
                </tr>
                <tr class="border-b dark:border-neutral-500 text-white">
                  <td class="whitespace-nowrap bg-[#1B1F30] flex items-center px-6 py-4 font-medium">
                    <img loading="lazy"
                      src={Princess}
                      className="rounded-full items-center mr-2"
                      alt="presidential aspirant thumb-image"
                      srcset=""
                    />
                    Ojei Princess Chichi
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4 text-start">
                    <span className="flex items-center" >  <img loading="lazy"
                      src={APP}
                      alt="party logo"
                      srcset=""
                      className="mr-2 items-center"
                    />{" "}
                   APP</span>
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Female
                  </td>
                  <td class="whitespace-nowrap bg-[#1B1F30] px-6 py-4">
                    Shettima Kashim
                  </td>
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
