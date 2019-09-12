class TrimService {

    addEllipsis = (mytextvar, maxlimit) => {
        if (!maxlimit) return mytextvar;
        return ((mytextvar).length > maxlimit) ?
            (((mytextvar).substring(0, maxlimit - 3)) + '...') :
            mytextvar;
    }
}

export default new TrimService();