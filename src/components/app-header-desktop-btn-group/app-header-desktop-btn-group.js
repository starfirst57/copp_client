import {Box, Button} from "grommet";
import {Login, Menu} from "grommet-icons";
import React from "react";


const AppHeaderDesktopBtnGroup = () => {
    return (
        <Box
            direction='row'
            flex
            aligin='end'
            justify='end'
        >
            <Button icon={<Menu />}
                    onClick={() => setShowSidebar(!showSidebar)} />
            <Button
                icon={<Login/>}
            />
        </Box>
    )
}