import { css } from '@emotion/react'
import { Animated, Basic, bounce, Combined, ComponentSelectors, Pink, ComponentSelectorsExtended, BasicExtended } from '../shared/styles'

const Home = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
    `}
  >
    <Basic>Cool Styles</Basic>
    <Pink>Pink text</Pink>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated animation={bounce}>Let's bounce.</Animated>
    <ComponentSelectors>
      <Basic>
        With another component as selector
      </Basic>
    </ComponentSelectors>
    <ComponentSelectorsExtended>
      <BasicExtended>
          With extended component as selector
      </BasicExtended>
    </ComponentSelectorsExtended>
  </div>
)

export default Home
