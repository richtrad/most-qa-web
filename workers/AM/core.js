
(function(root){
const API={
key(d,c){return ['most-private-AM',d.base_version,c.case_id,c.version,c.source_sha256].join(':')},
asset(prefix,path){if(!path||path.startsWith('/')||path.includes('..')||/^[a-z]+:/i.test(path))throw Error('Unsafe asset');return prefix+path},
load(storage,d,c){try{const x=JSON.parse(storage.getItem(this.key(d,c))||'{}');return x&&typeof x==='object'?x:{}}catch{return {}}},
save(storage,d,c,value){storage.setItem(this.key(d,c),JSON.stringify(value))},
export(d,storage){return {schema_version:1,worker:d.worker,street:d.street,base_version:d.base_version,created_at:new Date().toISOString(),application_status:'not_applied',automatic_authorization:false,cases:d.cases.map(c=>{const a=this.load(storage,d,c);return {case_id:c.case_id,case_version:c.version,source_id:c.source_id,source_sha256:c.source_sha256,base_version:d.base_version,variants:c.variants.map(v=>({variant_id:v.variant_id,version:v.version,sha256:v.sha256,status:v.status,rejection_reason:v.rejection_reason,reason_status:v.reason_status})),selected_variant_id:c.variants.some(v=>v.variant_id===a.variant_id)?a.variant_id:null,decision:a.decision||null,comment:a.comment||'',decision_time:a.time||null,application_status:'not_applied',requires_manual_reconciliation:true}})}}
};if(typeof module!=='undefined')module.exports=API;root.ReviewCore=API;
})(typeof window!=='undefined'?window:globalThis);
