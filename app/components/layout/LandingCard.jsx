import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";

export default function LandingCard({ header, number, blurb }) {
    const colorCode = (number, header) => {
        if (header === "Calls on Record") {
            return 'black'
        }
        if (number > 90) {
            return 'green'
        }
        if (number < 60) {
            return 'red'
        }
        return 'black'
    }
    const cardWidth = (header) => {
        if (header === "Calls on Record") {
            return { width: '100%', height: 160 }
        } else {
            return { width: 275, height: 230 }
        }
    }

    return (
        <Card sx={{ width: cardWidth(header).width, height: cardWidth(header).height, marginBottom: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: colorCode(number, header) }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ fontSize: '48px' }}>
                { header === "Calls on Record" ?
                number :
                `${number}%` }
                </Typography>
                <Typography variant="h7">
                { header }
                </Typography>
            </CardContent>
        </Card>
    )
}