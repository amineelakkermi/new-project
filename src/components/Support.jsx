import React from 'react';
import styles from '../style';
import { card2 } from '../assets';
import { motion } from "framer-motion";
import { textVariant } from '../motion';

const transactions1 = [
    { name: 'Bitcoin', nameF: "BTC" , D: "B" ,  amount: '$30.878.25', change: '2.15%', color: "--orange" },
    { name: 'Cardano', nameF: "ADA" , D: "C" , amount: '$0.44', change: '6.01%', color: "--blue" },
    { name: 'Polkadot', nameF: "DOT" , D: "P" , amount: '$6.68', change: '-1.81%', color: "--mauve" },
    { name: 'Solana', nameF: "SOL" , D: "S" , amount: '$24.18', change: '-4.50%', color: "--green" },
    { name: 'Polygon', nameF: "MATIC" , D: "P" , amount: '$1.21', change: '2.90%', color: "--blue" },
    { name: 'Avalanche', nameF: "AVAX" , D: "A" , amount: '$2.19', change: '-1.16%', color: "--orange" },
    { name: 'Near', nameF: "NEAR" , D: "N" , amount: '$2.19', change: '3.45%', color: "--mauve" },
    { name: 'Bitcoin', nameF: "BTC" , D: "B" , amount: '$30.878.25', change: '2.15%', color: "--orange" },
    { name: 'Cardano', nameF: "ADA" , D: "C" , amount: '$0.44', change: '6.01%', color: "--blue" },
    { name: 'Polkadot', nameF: "DOT" , D: "P" , amount: '$6.68', change: '-1.81%', color: "--mauve" },
];

const Support = () => {
    const firstThreeTransactions = transactions1.slice(0, 3);
    const secondThreeTransactions = transactions1.slice(3, 7);
    const thirdThreeTransactions = transactions1.slice(7);

    return (
        <section className={`min-h-[100vh] ${styles.padding} center flex-col gap-5`}>
            <div className='bg-mauveBg border-mauve flex gap-2 rounded-[20px] py-2 px-4'>
                <p className='text-mauve text-[13px]'>Multi-chain Support</p>
            </div>
            <h2 className={`text-[30px] font-[600] gradient-color`}>Easy cross-chain transactions</h2>
            <p className='text-white opacity-[0.8] tracking-normal text-center max-w-[450px]'>Seamless use for secure and reliable cross-chain transactions for your wallets</p>

            <div className='center flex-col md:gap-5 gap-10 my-10'>
                {/* First */}
                <div className='w-full center gap-5 flex-wrap'>
                    {firstThreeTransactions.map((item, index) => (
                        <div
                            key={index}
                            className={`transaction-card p-4 min-w-[250px] flex justify-start items-start bg-transparent hover: w-[250px] rounded-[20px] flex-col`}
                            style={{ "--color": `var(${item.color})`, "border": `1px solid var(${item.color})`  }}
                        >
                            <div className="w-full flex justify-between items-start">
                                <span className="font-semibold" style={{ color: `var(${item.color})` }}>
                                    {item.name}
                                </span>
                                <div className={`border-mauve w-[30px] h-[30px] center rounded-[50%] p-2 text-white bg-${item.color}`}>
                                {item.D}
                                </div>
                            </div>
                            <span className="opacity-50 text-white">{item.nameF}</span>
                            <div className="w-full mt-2 flex justify-between items-center">
                                <span className="font-semibold text-white">
                                    {item.amount}
                                </span>
                                <span className="font-semibold" style={{ color: `var(${item.color})` }}>
                                    {item.change}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second */}
                <div className='w-full center gap-5 flex-wrap'>
                    {secondThreeTransactions.map((item, index) => (
                        <div
                            key={index}
                            className="transaction-card p-4 min-w-[250px] flex justify-start items-start bg-transparent w-[250px] rounded-[20px] flex-col"
                            style={{ "--color": `var(${item.color})`, "border": `1px solid var(${item.color})` }}
                        >
                            <div className="w-full flex justify-between items-start">
                                <span className="font-semibold" style={{ color: `var(${item.color})` }}>
                                    {item.name}
                                </span>
                                <div className="border-mauve w-[30px] h-[30px] center rounded-[50%] p-2 text-white">
                                    {item.D}
                                </div>
                            </div>
                            <span className="opacity-50 text-white">{item.nameF}</span>
                            <div className="w-full mt-2 flex justify-between items-center">
                                <span className="font-semibold text-white">
                                    {item.amount}
                                </span>
                                <span className="font-semibold" style={{ color: `var(${item.color})` }}>
                                    {item.change}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Third */}
                <div className='w-full center gap-5 flex-wrap'>
                    {thirdThreeTransactions.map((item, index) => (
                        <div
                            key={index}
                            className="transaction-card p-4 min-w-[250px] flex justify-start items-start bg-transparent w-[250px] rounded-[20px] flex-col"
                            style={{ "--color": `var(${item.color})`, "border": `1px solid var(${item.color})` }}
                        >
                            <div className="w-full flex justify-between items-start">
                                <span className="font-semibold" style={{ color: `var(${item.color})` }}>
                                    {item.name}
                                </span>
                                <div className="border-mauve w-[30px] h-[30px] center rounded-[50%] p-2 text-white">
                                    {item.D}
                                </div>
                            </div>
                            <span className="opacity-50 text-white">{item.nameF}</span>
                            <div className="w-full mt-2 flex justify-between items-center">
                                <span className="font-semibold text-white">
                                    {item.amount}
                                </span>
                                <span className="font-semibold" style={{ color: `var(${item.color})` }}>
                                    {item.change}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <motion.div
                variants={textVariant(1.1)}
                initial='hidden'
                whileInView='show'
                className='circle3 z-0 rounded-full'
            />

        </section>
    );
}

export default Support;
