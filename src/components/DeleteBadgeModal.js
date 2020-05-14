import React, { Component } from 'react'
import Modal from './Modal'
import './styles/DeleteBadgeModal.css'

function DeleteBadgeModal(props){
        return (
            <Modal isOpen={props.isOpen}>
                <div className="DeleteBadgeModal">
                    <h1>Are you sure?</h1>
                    <p>you are about to delete this Badge.</p>

                    <div>
                        <button onClick={props.onDeleteBadge} className="btn btn-danger mr-4">Delete</button>
                        <button onClick={props.onClose} className="btn btn-primary">Cancel</button>
                    </div>
                </div>
            </Modal>
        )
}

export default DeleteBadgeModal
