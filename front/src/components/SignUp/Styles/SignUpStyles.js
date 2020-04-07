const styles = (theme) => {
    return {
        main: {
            width: '50%',
            // display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            // boxShadow: `20px red`
        },
        paper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: theme.spacing.unit * 7

        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            marginTop: theme.spacing.unit * 3
        },
        formcontrol: {
            marginTop: theme.spacing.unit * 2
        },
        avatar: {
            backgroundColor: theme.palette.secondary.main,
            margin: theme.spacing.unit
        },
        submit: {
            marginTop: theme.spacing.unit * 3
        }

    }
}
export default styles