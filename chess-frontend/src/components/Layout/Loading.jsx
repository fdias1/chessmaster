import styled from 'styled-components'
import { Spinner } from 'react-bootstrap'

const LoadingContainer = styled.div`
    position:absolute;
    left:0;
    top:0;
    width:100vw;
    height:100vh;
    background-color:#00000088;
    z-index:999999;
    display:${props => props.loading ? 'flex' : 'none'};
    align-items:center;
    justify-content:center;
`

const Loading = ({loading, ...props}) => {
    return (
        <LoadingContainer loading={loading} >
            <Spinner animation="grow" variant="light" style={{width:'100px', height:'100px'}}/>
        </LoadingContainer>
    );
}
 
export default Loading;