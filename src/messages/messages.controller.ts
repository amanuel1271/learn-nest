import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){
        const name = 'aman';
        return Object.values({hello: "aman"}).includes(name);
    }

    @Post()
    CreateMessage(){

    }

    @Get('/:id')
    getMessage(){
        
    }
}
