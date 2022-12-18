import { ReactNode } from 'react';

type RootProps = {
    children: ReactNode;
    onPanelDataChange: (nextPanelData: any) => void;
    panelData: any;
    height?: number;
};
type ItemsProps = {
    children: ReactNode;
    css: any;
    panelId: string;
};
declare const SectionPanel: {
    root: {
        ({ children, height, ...props }: RootProps): JSX.Element;
        displayName: string;
    };
    items: ({ children, css, ...props }: ItemsProps) => JSX.Element;
};

declare const PanelTest: () => JSX.Element;

export { PanelTest, SectionPanel };
