import Footer from './components/Footer';
import Card from './components/Card';
import Header from './components/Header';
import supervisor from './assets/icon-supervisor.svg';
import team_builder from './assets/icon-team-builder.svg';
import karma from './assets/icon-karma.svg';
import calculator from './assets/icon-calculator.svg';

import './App.css';

function App() {
  const card1_content = {
    title: {
      text: 'Supervisor',
      color: 'Very-Dark-Blue',
      text_size: 'lg',
    },
    subtitle: {
      text: 'Monitors activity to identify project roadblocks',
      color: 'Grayish-Blue',
      text_size: 'sm',
    },
    background_color: 'White',
    top_bar_color: 'Cyan',
    image: supervisor,
  }

  const card2_content = {
    title: {
      text: 'Team Builder',
      color: 'Very-Dark-Blue',
      text_size: 'lg',
    },
    subtitle: {
      text: 'Scans our talent network to create the optimal team for your project',
      color: 'Grayish-Blue',
      text_size: 'sm',
    },
    background_color: 'White',
    top_bar_color: 'Red',
    image: team_builder,
  }

  const card3_content = {
    title: {
      text: 'Karma',
      color: 'Very-Dark-Blue',
      text_size: 'lg',
    },
    subtitle: {
      text: 'Regularly evaluates our talent to ensure quality',
      color: 'Grayish-Blue',
      text_size: 'sm',
    },
    background_color: 'Wgite',
    top_bar_color: 'Orange',
    image: karma,
  }

  const card4_content = {
    title: {
      text: 'Calculator',
      color: 'Very-Dark-Blue',
      text_size: 'lg',
    },
    subtitle: {
      text: 'Uses data from past projects to provide better delivery estimates',
      color: 'Grayish-Blue',
      text_size: 'sm',
    },
    background_color: 'White',
    top_bar_color: 'Blue',
    image: calculator,
  }

  const header_content = {
    title: {
      text: 'Reliable, efficient delivery',
      color: 'Very-Dark-Blue',
      text_size: '2xl',
    },
    subtitle: {
      text: 'Powered by Technology',
      color: 'Very-Dark-Blue',
      text_size: '2xl',
    },
    description: {
      text: 'Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful',
      color: 'Grayish-Blue',
      text_size: 'sm',
    },
  }

  return (
    <>
      <div
        className='
          flex
          flex-col
          items-center
          justify-center
          sm:h-screen
          h-fit
          w-full
          sm:m-8
          my-8
        '>
        {/* main container */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            sm:space-y-8
            space-y-12
            m-auto
          ">
          <Header {...header_content} />
          {/* cards */}
          <div
            className='
              flex
              sm:flex-row
              flex-col
              items-center
              justify-center
              sm:space-x-10
              sm:space-y-0
              space-y-4
            '>
            {/* card-1 */}
            <div>
              <Card {...card1_content} />
            </div>
            <div
              className='
                flex
                flex-col
                items-center
                justify-center
                sm:space-y-10
                space-y-4
              '>
              {/* card-2 */}
              <div>
                <Card {...card2_content} />
              </div>
              {/* card-3 */}
              <div>
                <Card {...card3_content} />
              </div>
            </div>
            {/* card-4 */}
            <div>
              <Card {...card4_content} />
            </div>
          </div>
          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;