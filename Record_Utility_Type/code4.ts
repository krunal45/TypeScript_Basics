type Role = 'admin' | 'editor' | 'viewer';

type Permissions = Record<Role,string[]>;

const rolePermissions:Permissions = {
    admin:['read','write','delete'],
    editor:['read','write'],
    viewer:['read']
} 
console.log('Admin: ',rolePermissions.admin);
console.log('Editor: ',rolePermissions.editor);
console.log('Viewer: ',rolePermissions.viewer);