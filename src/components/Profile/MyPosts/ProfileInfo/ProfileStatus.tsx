import React, {ChangeEvent} from 'react';


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span
                        onDoubleClick={this.activateEditMode}>{this.props.status || "Here you can write your status"}</span>
                </div>}

                {this.state.editMode && <div>
                    <input autoFocus={true}
                           onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}
                           value={this.props.status}
                    />
                </div>}
            </div>
        )
    }
}


