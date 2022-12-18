import { SectionPanel } from '@alexandria-ui/design-system'
import Image from 'next/image'
import { useState } from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

export default {
  title: 'Design System/Section Panel',
  component: SectionPanel.root,
  argTypes: {
    height: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
}

export const TwoPanelHorizontal = (args: any) => {
  const matches = useMediaQuery('(max-width: 768px)')
  console.log(matches)
  const PANEL_DATA = [
    {
      data: {
        A: { w: 0.5, h: 1.0, x: 0, y: 0 },
        B: { w: 0.5, h: 1.0, x: 0.5, y: 0 },
      },
      adjList: [
        { A: { re: ['B'], le: [], tv: [], bv: [] } },
        { B: { le: ['A'], re: [], tv: [], bv: [] } },
      ],
    },
  ]
  const PANEL_DATA_MOBILE = [
    {
      data: {
        A: { x: 0, y: 0, h: 0.5, w: 1 },
        B: { x: 0, y: 0.5, h: 0.5, w: 1 },
      },
      adjList: [
        { A: { re: [], le: [], tv: [], bv: ['B'] } },
        { B: { le: [], re: [], tv: ['A'], bv: [] } },
      ],
    },
  ]
  const [panelData, setPanelData] = useState(
    matches ? PANEL_DATA_MOBILE : PANEL_DATA,
  )
  return (
    <SectionPanel.root
      {...args}
      onPanelDataChange={(nextPanelData: any) => setPanelData(nextPanelData)}
      panelData={panelData}
    >
      <SectionPanel.items panelId="A" css={{ backgroundColor: 'red' }}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
          alt=""
          width={640}
          height={480}
        />
      </SectionPanel.items>
      <SectionPanel.items panelId="B" css={{ backgroundColor: 'blue' }}>
        Titulo 2
      </SectionPanel.items>
    </SectionPanel.root>
  )
}

export const ThreePanelHorizontal = (args: any) => {
  const PANEL_DATA = [
    {
      data: {
        A: { w: 0.33333, h: 1.0, x: 0, y: 0 },
        B: { w: 0.33333, h: 1.0, x: 0.33333, y: 0 },
        C: { w: 0.33333, h: 1.0, x: 0.66666, y: 0 },
      },
      adjList: [
        { A: { re: ['B'], le: [], tv: [], bv: [] } },
        { B: { le: ['A'], re: ['C'], tv: [], bv: [] } },
        { C: { le: ['B'], re: [], tv: [], bv: [] } },
      ],
    },
  ]
  const [panelData, setPanelData] = useState(PANEL_DATA)
  return (
    <SectionPanel.root
      {...args}
      onPanelDataChange={(nextPanelData: any) => setPanelData(nextPanelData)}
      panelData={panelData}
    >
      <SectionPanel.items panelId="A" css={{ backgroundColor: 'red' }}>
        Titulo 1
      </SectionPanel.items>
      <SectionPanel.items panelId="B" css={{ backgroundColor: 'blue' }}>
        Titulo 2
      </SectionPanel.items>
      <SectionPanel.items panelId="C" css={{ backgroundColor: 'green' }}>
        Titulo 3
      </SectionPanel.items>
    </SectionPanel.root>
  )
}

export const ThreePanelVertical = (args: any) => {
  const PANEL_DATA = [
    {
      data: {
        A: { x: 0, y: 0, h: 0.33333, w: 1 },
        B: { x: 0, y: 0.33333, h: 0.33333, w: 1 },
        C: { x: 0, y: 0.66666, h: 0.33333, w: 1 },
      },
      adjList: [
        { A: { re: [], le: [], tv: [], bv: ['B'] } },
        { B: { re: [], le: [], tv: ['A'], bv: ['C'] } },
        { C: { re: [], le: [], tv: ['B'], bv: [] } },
      ],
    },
  ]
  const [panelData, setPanelData] = useState(PANEL_DATA)
  return (
    <SectionPanel.root
      {...args}
      onPanelDataChange={(nextPanelData: any) => setPanelData(nextPanelData)}
      panelData={panelData}
    >
      <SectionPanel.items panelId="A" css={{ backgroundColor: 'red' }}>
        Titulo 1
      </SectionPanel.items>
      <SectionPanel.items panelId="B" css={{ backgroundColor: 'blue' }}>
        Titulo 2
      </SectionPanel.items>
      <SectionPanel.items panelId="C" css={{ backgroundColor: 'green' }}>
        Titulo 3
      </SectionPanel.items>
    </SectionPanel.root>
  )
}
