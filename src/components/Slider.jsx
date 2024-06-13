import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../motion";

const transactions = [
  { name: 'Bitcoin', nameF: "B" ,  amount: '$30.878.25', change: '2.15%', color: "--orange" },
  { name: 'Cardano', nameF: "C" , amount: '$0.44', change: '6.01%', color: "--blue" },
  { name: 'Polkadot', nameF: "P" , amount: '$6.68', change: '-1.81%', color: "--mauve" },
  { name: 'Solana', nameF: "S" , amount: '$24.18', change: '-4.50%', color: "--green" },
  { name: 'Polygon', nameF: "P" , amount: '$1.21', change: '2.90%', color: "--blue" },
 

];

const Slider = () => {
  return (
    <section className="min-h-[500px] md:my-0 my-48 w-full center relative w-[100%]">
      <div className="center gap-5 w-full flex-wrap overflow-hidden flex">
        {transactions.map((transaction, index) => (
          <div
            key={index}
            className="transaction-card p-4  min-w-[250px]  flex justify-start items-start bg-transparent w-[250px] rounded-[20px] flex-col"
           
            style={{ "--color": `var(${transaction.color})` , "border": `1px solid var(${transaction.color})` }} // Définir la variable CSS personnalisée
          >
            <div className="w-full flex justify-between items-start">
              <span className="font-semibold" style={{ color: `var(${transaction.color})` }}>
                {transaction.name}
              </span>
              <div className="border-mauve w-[30px] h-[30px] center rounded-[50%] p-2 text-white">
                {transaction.nameF}
              </div>
            </div>
            <span className="opacity-50 text-white">BTC</span>
            <div className="w-full mt-2 flex justify-between items-center">
              <span className="font-semibold text-white">
                {transaction.amount}
              </span>
              <span className="font-semibold" style={{ color: `var(${transaction.color})` }}>
                {transaction.change}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Ajoutez votre élément de décor avec motion */}
      <motion.div
        variants={textVariant(0.5)}
        initial="hidden"
        whileInView="show"
        className="circle6 z-0 rounded-full"
      />
    </section>
  );
};

export default Slider;
