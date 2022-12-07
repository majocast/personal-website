import Background from '../images/home-background.png';

export default function Home() {
    const styles = {
        header: {
          backgroundImage: `url(${Background})`,
          height: '100vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        },
      
        content: {
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          color: 'white',
          fontSize: '20pt'
        },

        nameHeader: {
            fontSize: '40pt',
            backgroundColor: 'transparent',
            
        }
      }
      
    
    return (
        <>
            <div style={styles.header}>
                <div style={styles.content}>
                    <h2 style={styles.nameHeader}>Marc Castro</h2>
                    <p></p>
                </div>
            </div>
        </>
    );
}