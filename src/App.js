import {Box, Button, Grommet, Collapsible, ResponsiveContext, Layer, Image, Header} from 'grommet';
import {Login, Menu, FormClose} from 'grommet-icons';
import React, { useState } from "react";
import AppBar from "./components/app-bar/app-bar"
import AppLogo from "./components/app-logo/app-logo";
const theme = {
    global: {
        colors: {
            brand: '#fff',
        },
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px',
        },
    },
};



const App = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
          <Grommet theme={theme} full>
              <ResponsiveContext.Consumer>
                  {size => (
                      <Box fill>
                         <AppBar>
                            <AppLogo/>


                         </AppBar>
                         <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                           <Box flex align='center' justify='center'>
                             app body
                           </Box>
                             {(!showSidebar || size !== 'small') ? (
                                 <Collapsible direction="horizontal" open={showSidebar}>
                                     <Box
                                         flex
                                         width='medium'
                                         background='light-2'
                                         elevation='small'
                                         align='center'
                                         justify='center'
                                     >
                                         sidebar
                                     </Box>
                                 </Collapsible>
                             ) : (
                                 <Layer>
                                     <Box>
                                         <Button
                                             icon={<FormClose/>}
                                             onClick={() => setShowSidebar(false)}
                                         />
                                     </Box>
                                     <Box
                                        fill
                                        background='light-2'
                                        align='center'
                                        justify='center'
                                     >
                                         sidebar
                                     </Box>
                                 </Layer>
                             )}
                         </Box>
                      </Box>
                  )}
              </ResponsiveContext.Consumer>
          </Grommet>
  );
}

export default App;
