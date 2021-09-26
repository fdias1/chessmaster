import { Col } from 'react-bootstrap'
import Square from './ChessBoardSquare'
import LabelSquare from './ChessBoardLabelSquare'

const ChessBoard = (props) => {
    const rows = ['8','7','6','5','4','3','2','1']
    const columns = ['a','b','c','d','e','f','g','h']
    let light = true

    return (
            <div className="rounded overflow-hidden border border-light m-5">
                <table>
                    {rows.map(row => {
                        light = !light
                        return (
                            <tr height='60px' key={row}>
                                <LabelSquare className="label" width='60px'>{row}</LabelSquare>
                                {columns.map(col => {
                                    light = !light
                                    return (
                                        <Square width='60px' coordinates={col + row} className={light? 'light' : 'dark'} key={col}></Square>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    <tr>
                        <LabelSquare className="label" height='60px'></LabelSquare>
                        {columns.map(col => {
                            return (
                                <LabelSquare width='60px' className="label" key={col}>{col}</LabelSquare>
                            )
                        })}
                    </tr>
            </table>
            </div>

    );
}
 
export default ChessBoard;