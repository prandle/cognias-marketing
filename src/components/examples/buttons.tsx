import { Button } from "../../components/ui";

export default function SampleButtons() {
    return (
        <>
            <Button
                variant="primary"
                className="px-6 py-3">
                Primary Button
            </Button>
            <Button
                variant="secondary"
                className="px-6 py-3">
                Secondary Button
            </Button>
            <Button
                variant="outline"
                className="px-6 py-3">
                Outline Button
            </Button>
            <Button
                variant="ghost"
                className="px-6 py-3">
                Ghost Button
            </Button>
            <Button
                variant="destructive"
                className="px-6 py-3">
                Destroy Button
            </Button>
        </>
    )
}