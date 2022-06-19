import React from 'react'
import { NavLink } from 'react-router-dom'
import "../../assets/scss/pages/_list-page.scss"
import ListLine from './ListLine'
import ListStu from './ListStu'

export default function ListPage(props) {
  return (
    <div>
      <ListLine></ListLine>
      <ListStu></ListStu>
    </div>
  )
}