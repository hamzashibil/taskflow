import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
} from "@/components/ui/card";


export default function TaskCard(){
    return(
        <Card>
            <CardHeader>
                <CardTitle>
                    <h1><b>Learn TypeScript</b></h1>
                </CardTitle>
            </CardHeader>

            <CardContent>
                <p>Priority: High</p>
                <p>Status: ToDo</p>
            </CardContent>
        </Card>
    );
    

}
