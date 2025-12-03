function MsgBox({UserName,textColor}) {
    let styles = {color:textColor};
    return(
        <h1 style={styles}>Hello,{UserName}</h1>
    )
}

export default MsgBox;