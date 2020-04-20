const styles = (theme) => {
    return {
        appBar: {
            width: "100%",
            height: '64px',

        },
        toolbar: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'

        }, cardMedia: {
            marginLeft: '0.5%',
            width: '20%',
            height: '100%',
            boxSizing: 'border-box'
        },
        cardMediaImage: {
            width: '100%',
            maxHeight: '100%',
            objectFit: 'cover'

        },
        search: {
            position: 'relative',
            flexGrow: '0.1'
        },
        searchIcon: {
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
        },
        inputRoot: {
            color: 'inherit',
            width: '100%'
        },
        inputInput: {
            paddingLeft: theme.spacing.unit * 3,
            paddingTop: theme.spacing.unit,
            paddingBottom: theme.spacing.unit,
            paddingRight: theme.spacing.unit,
            border: '2px solid #bbbbbb',
            transition: theme.transitions.create('width'),
            width: '65%',
            "&:focus": {
                border: '2px solid cyan',
                width: '100%',
            },
         

        },
        avatarButton: {

        }
    }
}
export default styles;