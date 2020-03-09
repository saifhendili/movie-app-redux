import React, { Component } from 'react'
import { connect } from 'react-redux'
import Etoile from './showstars'
import {deletemovie,editmovie} from '../js/actions/creactactions'
import Edit from './editmodal'



class displaycard extends Component {
  
    render() {
        return (
            <div className='cards'>
                
               {
                        this.props.movieliste.filter(el =>
                            el.title.toLowerCase().includes(this.props.searchvalue)).map((er, i) => 
                            <ul key={i} className="card">
                               
                            <li><img src={er.lien} alt='logo' width='230px' height='300px' /></li>
                            <h3 className='title'>{er.title}</h3>
                            <div className="stars"><Etoile count={er.rating} /></div>
                            <a href={er.trailer}> <button className="buttdescription butt">Movie Description</button></a> 
                            <div className='option'>
                            <Edit id={er.id}/>
                            {/* <button className='buttoption butt' >Edit</button> */}
                            <button className='buttoption butt' onClick={()=>this.props.deletemovie(er.id)}>Remove</button>
                            </div>
                            </ul>)
                    }

            </div>
        )
    }
}

const mapStateToProps = state=>({
    movieliste:state.movieliste,
    listesearch:state.listesearch,
    searchvalue:state.searchvalue,
    trailer:state.trailer
})
const mapDispatchToProps =dispatch=>{
    return {
        deletemovie:(id)=>{
            dispatch(deletemovie(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (displaycard)


