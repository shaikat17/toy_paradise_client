import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import HomeProductCard from "./HomeProductCard";
import { useGlobalContext } from "../context/AppAuthContext";
import { ColorRing } from "react-loader-spinner";

const ShopByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [toys, setToys] = useState([])

    const { dataLoading, setDataLoading } = useGlobalContext()

    useEffect(() => {
        // console.log(tabIndex)
        setDataLoading(true)
        fetch(`https://toy-paradise-server.vercel.app/toys/${tabIndex}`)
        .then(res => res.json())
        .then(data => {
            setToys(data.slice(0,3))
            setDataLoading(false)
        })
    },[tabIndex])

  return (
    <div className="px-2">
    <h1 className="text-center text-3xl font-black py-3"><span className="border-b-4 border-[#56BC97]">Shop By Category</span></h1>
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>All Toys</Tab>
        <Tab>Baby Doll</Tab>
        <Tab>Fashion Doll</Tab>
        <Tab>Character Doll</Tab>
      </TabList>

      <TabPanel>
      {dataLoading ? <div className="flex items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-2">
{toys.map(toy => <HomeProductCard key={toy._id} {...toy} />)}
        </div>}
        
      </TabPanel>
      <TabPanel>
      {dataLoading ? <div className="flex items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-2">
{toys.map(toy => <HomeProductCard key={toy._id} {...toy} />)}
        </div>}
      </TabPanel>
      <TabPanel>
      {dataLoading ? <div className="flex items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-2">
{toys.map(toy => <HomeProductCard key={toy._id} {...toy} />)}
        </div>}
      </TabPanel>
      <TabPanel>
      {dataLoading ? <div className="flex items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-2">
{toys.map(toy => <HomeProductCard key={toy._id} {...toy} />)}
        </div>}
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default ShopByCategory;
