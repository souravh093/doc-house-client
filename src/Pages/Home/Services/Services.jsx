import React from "react";
import Container from "../../../components/Container/Container";
import servicesImg from "../../../assets/services/services.png";
import service1 from "../../../assets/services/service1.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Services() {
  return (
    <Container>
      <div className="my-32 grid grid-cols-2 gap-5">
        <div>
          <img className="w-full" src={servicesImg} alt="" />
        </div>
        <div>
          <div className="flex flex-col gap-4 mb-10">
            <h2 className="text-6xl font-semibold">Our Services</h2>
            <p className="font-medium max-w-xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inve ntore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div>
            <Tabs>
              <TabList className="flex mb-10">
                <Tab
                  selectedClassName="bg-orange-400 text-white"
                  className="cursor-pointer mr-2 px-4 py-5 bg-gray-200 text-gray-700 rounded-md hover:bg-orange-500 focus:outline-none"
                >
                  Cavity Protection
                </Tab>
                <Tab
                  selectedClassName="bg-orange-400 text-white"
                  className="cursor-pointer mr-2 px-4 py-5 bg-gray-200 text-gray-700 rounded-md hover:bg-orange-500 focus:outline-none"
                >
                  Cosmetic Dentists
                </Tab>
                <Tab
                  selectedClassName="bg-orange-400 text-white"
                  className="cursor-pointer mr-2 px-4 py-5 bg-gray-200 text-gray-700 rounded-md hover:bg-orange-500 focus:outline-none"
                >
                  Oral Surgery
                </Tab>
              </TabList>

              <TabPanel>
                <div>
                  <img className="w-full" src={service1} alt="" />
                  <h2 className="text-4xl font-bold my-10">Electro Gastrology Therapy</h2>
                  <p className="text-lg max-w-xl mb-10">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inve ntore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Sed ut
                    perspiciatis unde omnis iste natus error Sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inve ntore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </p>
                  <button className="text-2xl text-orange-400 border py-5 px-10 rounded-xl border-orange-400">More Details</button>
                </div>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Services;
