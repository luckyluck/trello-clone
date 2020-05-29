import React from "react";

import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
    text: string;
}

export const Column: React.FC<React.PropsWithChildren<ColumnProps>> = ({ text, children }) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
        </ColumnContainer>
    );
};