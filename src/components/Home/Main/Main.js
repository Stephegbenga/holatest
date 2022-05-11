import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/main.css'
import { Frame } from './Frame';
import { Featured } from './Featured';
import { CurrentListing } from './CurrentListing';
import { Collections } from './Collections';

export const Main = () => {


    return (
        <main className='container-fluid mt-5' style={{
            backgroundColor: "transparent"
        }}>
<Frame />
<Collections />
<Featured />

<CurrentListing />

            
            
        </main>
    )
}