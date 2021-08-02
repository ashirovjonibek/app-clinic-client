import React from 'react';
import Modal from '@material-ui/core/Modal';
import EditIcon from '@material-ui/icons/Edit';

export default function SimpleModal({item}) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                <EditIcon />
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className="simple-modal">
                    <ul>
                        <li>
                            <div className="label">Ф.И.О</div>
                            <div className="inform">{item.fullName}</div>
                        </li>
                        <li>
                            <div className="label">Должность</div>
                            <div className="inform">{item.position.title.ru}</div>
                        </li>
                        <li>
                            <div className="label">Курс</div>
                            <div className="inform">{item.course}</div>
                        </li>
                        <li>
                            <div className="label">Кафедра</div>
                            <div className="inform">{item.section.title.ru}</div>
                        </li>
                        <li>
                            <div className="label">Телефон</div>
                            <div className="inform">{item.phoneNumber}</div>
                        </li>
                        <li>
                            <div className="label">Почта</div>
                            <div className="inform">{item.email}</div>
                        </li>
                    </ul>
                    <button className="change-btn">Изменить</button>
                </div>
            </Modal>
        </div>
    );
}