import '../../style/pages/MainPage.css'

function MainPage() {
    return (
        <div className='main__body'>

            <div className='main__col 1'>
                <div className='main__container'>
                    <h5>Today's Planning</h5>
                </div>
            </div>

            <div className='main__col 2'>
                <div className='main__container'>
                    <h5>Pomodoro</h5>
                </div>

                <div className='main__container'>
                    <h5>Tasks List</h5>
                </div>
            </div>

            <div className='main__col 3'>
                <div className='main__container'>
                    <h5>Meetings</h5>
                </div>

                <div className='main__container'>
                    <h5>Mood Levels</h5>
                </div>
            </div>
        </div>
    )
}

export default MainPage;