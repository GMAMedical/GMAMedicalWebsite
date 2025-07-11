

export default function Footer() {

    let date = new Date();

    return (
        <div className="text-center">
            <p>© GMA MedicalTM {date.getFullYear()} All rights reserved.</p>
        </div>
    );
}