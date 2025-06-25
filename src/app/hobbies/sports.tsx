import FlowingMenu from "./components/sportsComponents/flowingMenu";
import "./components/sportsComponents/sports.css";
import { useEffect, useState } from "react";

const headerItems = [
  { link: '#', text: 'Hover To Reveal', text2: 'Sports I Play And Follow', image:'https://static.vecteezy.com/system/resources/previews/006/672/318/non_2x/cricket-ball-illustration-as-a-basketball-player-vector.jpg' },
];

const cricketHeaderItems = [
  { link: '#', text: 'Sport 1', text2: 'Cricket', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT38l2hvM0IdiC-Oc8VC6p7DlKk7hsgHPnhwA&s' },
];

const basketballHeaderItems = [
  { link: '#', text: 'Sport 2', text2: 'Basketball', image:'https://png.pngtree.com/png-clipart/20231004/original/pngtree-basketball-cartoon-illustration-png-image_13097555.png' },
];

const cricketItems = [
  { link: '#', text: 'Favourite International Team', text2: 'England', image: 'https://yt3.googleusercontent.com/Kvp63X5q5rUFXpy73Nwj3HYhUnymjVJyZjRGDEhUii26M8Ufr-30l9yekzDPcIj7Hj3bELCSGA=s160-c-k-c0x00ffffff-no-rj' },
  { link: '#', text: 'Favourite IPL Team', text2: 'Mumbai Indians', image: 'https://i.pinimg.com/736x/5e/0d/ff/5e0dfff8e8666af7e227bbb6ccbf0756.jpg' },
  { link: '#', text: 'Favourite Player', text2: 'Ben Stokes', image: 'https://images.theconversation.com/files/290082/original/file-20190829-106530-1rt1h0m.jpg?ixlib=rb-4.1.0&rect=5%2C0%2C3408%2C2318&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip' }
];

const basketballItems = [
  { link: '#', text: 'Favourite Team', text2: 'San Antonia Spurs', image: 'data:image/png;base64,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' },
  { link: '#', text: 'Favourite Player', text2: 'LeBron James', image: 'https://athlonsports.com/.image/t_share/MjE0OTg2MzgxOTU1NDQyNDY4/lebron-james.jpg' }
];



export default function Sports() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

   if (loading) {
    return (
        <div className="flex items-center justify-center">
        <div className="loader w-24 h-24"></div>
        </div>
    );
    }
  return (
    <div 
        className="p-8 rounded-xl shadow-xl"
        style={{
        background: 'linear-gradient(90deg, #000045 0%, #0E3878 40%, #4D4D4D 100%)',
    }}>

        {/* Header */}
        <h1 
        style={{
                height: '100px',
                width: '100%',
                position: 'relative',
                }}
        className="custom-class text-4xl lg:text-5xl font-extrabold mb-6 text-center tracking-wide focus-in-expand text-[#000000]">
            <FlowingMenu items={headerItems} />
        </h1>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">

        {/* Left - Cricket & IPL */}
        <div className="fade-in-left flex flex-col items-center w-full focus-in-expand stagger-1">
            
            {/* Cricket Header Title */}
            <div
                className="focus-in-expand stagger-2"
                style={{
                height: '100px',
                width: '100%',
                position: 'relative',
                }}
            >
                <FlowingMenu items={cricketHeaderItems} />
            </div>

            {/* Cricket Items */}
            <div
                className="focus-in-expand stagger-3"
                style={{
                height: '450px',
                width: '100%',
                position: 'relative',
                }}
            >
                <FlowingMenu items={cricketItems} />
            </div>
        </div>

            {/* Right - Basketball */}
            <div className="fade-in-right border-l border-gray-400 pl-6 flex flex-col items-center focus-in-expand stagger-2">
            
            {/* Basketball Header Title */}
            <div
                className="focus-in-expand stagger-2"
                style={{
                height: '100px',
                width: '100%',
                position: 'relative',
                }}
            >
                <FlowingMenu items={basketballHeaderItems} />
            </div>

            {/* Basketball Items */}
            <div className="focus-in-expand stagger-3" style={{ width: '100%', height:'420px' }}>
                <FlowingMenu items={basketballItems} />
            </div>
        </div>
        </div>
    </div>
  );
}
