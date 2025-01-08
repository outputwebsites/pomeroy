import { FC } from "react";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

interface IItemAccordionProps {
  index: number;
  question: string;
  answer: JSX.Element;
}

const ItemAccordion: FC<IItemAccordionProps> = ({
  index,
  question,
  answer
}): JSX.Element => {
  return (
    <AccordionItem key={index} title={question ? question : ""}>
      <AccordionItemHeading>
        <AccordionItemButton>
          <h3 className="text-xl inline font-normal">{question}</h3>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div>{answer}</div>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default ItemAccordion;