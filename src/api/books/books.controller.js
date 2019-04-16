import Book from 'models/book';

//asd
//asdfqer
// import { } 를 사용하여 가져오기 위해 export 방식을 기존 코드와 다르게 변경
export const list = async (ctx) => {
    let books;

    try {
        books = await Book.find()
            .sort({_id: -1})
            .limit(3)
            .exec();
    } catch (e) {
        return ctx.throw(500, e);
    }

    ctx.body = books;
};

export const create = async (ctx) => {
     // request body 에서 값들을 추출합니다
     const { 
        title,  
        authors, 
        publishedDate,  
        price, 
        tags 
    } = ctx.request.body;

    console.log(`${title}, ${authors}, ${publishedDate}, ${price}, ${tags}`);

    // Book 인스턴스를 생성합니다
    const book = new Book({
        title, 
        authors,
        publishedDate,
        price,
        tags
    });

    // 만들어진 Book 인스턴스를, 이렇게 수정 할 수도 있습니다.
    // book.title = title;

    //.save() 함수를 실행하면 이 때 데이터베이스에 실제로 데이터를 작성합니다.
    // Promise 를 반환합니다.
    try {
        await book.save();
    } catch(e) {
        // HTTP 상태 500 와 Internal Error 라는 메시지를 반환하고, 
        // 에러를 기록합니다.
        return ctx.throw(500, e);
    }

    // 저장한 결과를 반환합니다.
    ctx.body = book;
};

export const get = async (ctx) => {
    const { id } = ctx.params;

    let book;

    try{
        book = await Book.findById(id).exec();
    } catch (e) {
        if(e.name === 'CastError'){
            ctx.status = 400;
            return;
        }
        return ctx.throw(500, e);
    }

    if(!book) {
        ctx.status = 404;
        ctx.body = { message : 'book not found'};
        return;
    }

    ctx.body = book;
};

export const deleted = async (ctx) => {
    const { id } = ctx.params;

    try {
        await Book.findOneAndDelete().exec();
    } catch (e) {
        if(e.name === 'CastError'){
            console.log('nope');
            ctx.status = 400;
            return;
        }
    } 

    ctx.status = 204;
};

export const replace = async (ctx) => { 
    let book;

    try {
        book = await Book.findByIdAndUpdate(id, ctx.request.body, {
            upsert : true,
            new : true
        });
    }catch (e){
        return ctx.throw(500, e);
    }
    ctx.body = book;
};

export const update = (ctx) => {
    ctx.body = 'updated';
};  