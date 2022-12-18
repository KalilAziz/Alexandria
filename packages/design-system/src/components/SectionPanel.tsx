import { ReactNode } from 'react'
import PanelManager, { Panel } from 'react-panel-system'
import { styled } from '../styles'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  height: '90vh',
  flexGrow: 1,
  flexBasis: 1,

  '& > div': {
    display: 'flex',
    border: '1px solid darkblue',
    height: '100%',
    width: '100%',
  },

  '.left-edge, .right-edge, .top-edge, .bottom-edge': {
    backgroundColor: 'gray',
    margin: 'auto',
  },

  '.left-edge': {
    height: '40px',
    width: '3px',
    borderRadius: ' 0 4px 4px 0 ',
  },

  '.right-edge': {
    height: '40px',
    width: '3px',
    borderRadius: ' 4px 0 0 4px ',
  },

  '.top-edge': {
    width: '40px',
    height: '3px',
    borderRadius: ' 0 0 4px 4px ',
  },

  '.bottom-edge': {
    width: '40px',
    height: '3px',
    borderRadius: '4px 4px 0 0 ',
  },
})

type RootProps = {
  children: ReactNode
  onPanelDataChange: (nextPanelData: any) => void
  panelData: any
  height?: number
}

const Root = ({ children, height = 80, ...props }: RootProps) => {
  return (
    <Container css={{ height: `${height}vh` }}>
      <div>
        <PanelManager
          {...props}
          leftEdgeClassName="left-edge"
          rightEdgeClassName="right-edge"
          topEdgeClassName="top-edge"
          bottomEdgeClassName="bottom-edge"
        >
          {children}
        </PanelManager>
      </div>
    </Container>
  )
}

Root.displayName = 'Root'

const Item = styled('div', {
  display: 'flex',
  flexGrow: 1,
  overflow: 'hidden',

  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
})

type ItemsProps = {
  children: ReactNode
  css: any
  panelId: string
}

const Items = ({ children, css, ...props }: ItemsProps) => {
  return (
    <Panel {...props}>
      <Item css={css}>{children}</Item>
    </Panel>
  )
}

export const SectionPanel = {
  root: Root,
  items: Items,
}
