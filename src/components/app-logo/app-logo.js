import {Box, Image} from "grommet";
import React from "react";


const AppLogo = () => {
    return (
        <Box height="xxsmall" width="small">
            <Image
                fit="contain"
                src="https://copp.ruobr.ru/static/copp/img/logo.jpg"
                a11yTitle="ЦОПП"
                alt='ЦОПП'
            />
        </Box>
    )
}

export default AppLogo;