import React from 'react';
import * as  $ from 'jquery';
import 'bootstrap';

class GenericModal extends React.Component {


    componentDidMount() {
        if (this.props.Show) {
            $('#genericModal').modal('show');
        }
    }

    modal() {
        return <div className="modal fade" id="genericModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{this.props.Title || 'Message Title.'}</h5>
                        <button type="button" className="close" data-dismiss="modal" onClick={this.props.onClose} >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {this.props.Body || 'Message Body.'}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.onClose} >Close</button>
                    </div>
                </div>
            </div>
        </div>
    }

    render() {
        return this.modal();
    }
}

export default GenericModal;